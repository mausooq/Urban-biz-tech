"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  department: string;
  message: string;
  submittedAt: string;
}

function ResponseContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const contactId = searchParams.get("id");

  const fetchContacts = useCallback(async () => {
    try {
      const response = await fetch("/api/contact");
      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }
      const data = await response.json();
      setContacts(data.contacts || []);
    } catch (err) {
      setError("Failed to load contacts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const checkPassword = useCallback(() => {
    const password = prompt("Enter password to access this page:");
    if (password === "8080") {
      setIsAuthenticated(true);
      setCheckingAuth(false);
      fetchContacts();
    } else {
      setCheckingAuth(false);
      router.push("/");
    }
  }, [router, fetchContacts]);

  useEffect(() => {
    checkPassword();
  }, [checkPassword]);

  const displayedContact = contactId
    ? contacts.find((c) => c.id === contactId)
    : contacts[contacts.length - 1];

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Checking access...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect, so return nothing
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Success Message */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-300">
            Your message has been submitted successfully.
          </p>
        </div>

        {/* Latest Submission */}
        {displayedContact && (
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Your Submission
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <p className="text-white text-lg">{displayedContact.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <p className="text-white text-lg">{displayedContact.email}</p>
                </div>
                {displayedContact.department && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Department
                    </label>
                    <p className="text-white text-lg">
                      {displayedContact.department}
                    </p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <p className="text-white text-lg whitespace-pre-wrap">
                    {displayedContact.message}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Submitted At
                  </label>
                  <p className="text-gray-400 text-sm">
                    {new Date(displayedContact.submittedAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Submissions */}
        {contacts.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              All Submissions ({contacts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts
                .slice()
                .reverse()
                .map((contact) => (
                  <div
                    key={contact.id}
                    className={cn(
                      "bg-gray-900/50 border rounded-xl p-6",
                      "hover:border-[#CE2029] transition-colors duration-200",
                      contactId === contact.id
                        ? "border-[#CE2029]"
                        : "border-gray-800"
                    )}
                  >
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {contact.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{contact.email}</p>
                      </div>
                      {contact.department && (
                        <div>
                          <span className="text-xs text-gray-500 uppercase">
                            Department
                          </span>
                          <p className="text-gray-300">{contact.department}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-gray-300 text-sm line-clamp-3">
                          {contact.message}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-gray-800">
                        <p className="text-gray-500 text-xs">
                          {new Date(contact.submittedAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className={cn(
              "inline-block px-8 py-3 rounded-lg",
              "bg-[#CE2029] text-white font-semibold text-base",
              "hover:bg-[#b01d25] active:bg-[#8a161c]",
              "focus:outline-none focus:ring-2 focus:ring-[#CE2029] focus:ring-offset-2 focus:ring-offset-black",
              "transition-all duration-200 shadow-lg hover:shadow-xl"
            )}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResponsePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }
    >
      <ResponseContent />
    </Suspense>
  );
}
