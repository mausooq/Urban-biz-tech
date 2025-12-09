import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

const dataFilePath = path.join(process.cwd(), "data", "contacts.json");

interface Contact {
  id: string;
  name: string;
  email: string;
  department: string;
  message: string;
  submittedAt: string;
}

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read existing contacts
async function readContacts(): Promise<Contact[]> {
  try {
    await ensureDataDirectory();
    const fileContents = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(fileContents) as Contact[];
  } catch {
    // If file doesn't exist, return empty array
    return [];
  }
}

// Write contacts to file
async function writeContacts(contacts: Contact[]) {
  await ensureDataDirectory();
  await fs.writeFile(dataFilePath, JSON.stringify(contacts, null, 2), "utf8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, department, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Create contact entry
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      department: department || "",
      message,
      submittedAt: new Date().toISOString(),
    };

    // Read existing contacts
    const contacts = await readContacts();

    // Add new contact
    contacts.push(contact);

    // Write back to file
    await writeContacts(contacts);

    return NextResponse.json(
      { success: true, contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await readContacts();
    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error("Error reading contacts:", error);
    return NextResponse.json(
      { error: "Failed to read contacts" },
      { status: 500 }
    );
  }
}

