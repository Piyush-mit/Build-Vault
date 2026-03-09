import { ShieldAlertIcon } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-center">
          <div className="h-20 w-20 bg-red-50 rounded-full flex items-center justify-center">
            <ShieldAlertIcon className="h-10 w-10 text-red-500" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Access Denied
          </h1>
          <p className="text-gray-500">
            You need to be signed in to view this page. Please log in to continue.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Link 
            href="/" 
            className="w-full inline-flex justify-center items-center px-4 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}