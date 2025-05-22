
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Check, X } from "lucide-react";
import { JobPosting } from "./JobPostingCard";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface JobApplicationModalProps {
  job: JobPosting | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobApplicationModal = ({ job, isOpen, onClose }: JobApplicationModalProps) => {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      console.log("Submitting application...");
      
      // Create application data for submission
      const applicationData = {
        // Job details
        jobId: job?.id || "",
        jobTitle: job?.title || "",
        jobDepartment: job?.department || "",
        jobLocation: job?.location || "",
        
        // Applicant details
        firstName,
        lastName,
        email,
        phone,
        message,
        consentMarketing,
        
        // Flag for attachments
        hasAttachments: !!(resume || coverLetter)
      };

      console.log("Application data:", applicationData);

      // Submit the application using our Netlify function
      const response = await fetch("/.netlify/functions/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      console.log("Response status:", response.status);
      
      // Instead of trying to parse JSON response immediately, check content type first
      const contentType = response.headers.get("content-type");
      
      if (response.ok) {
        // Even if the response is OK but not JSON, we can still consider it successful
        // and avoid the JSON parsing error
        toast({
          title: "Application Submitted",
          description: "Thank you for your application. We will be in touch soon.",
        });

        onClose();
        resetForm();
        return;
      }
      
      let errorMessage = "Failed to submit application";
      
      // Try to get error details if possible
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.details || errorMessage;
      } else {
        // If not JSON, use status text
        errorMessage = `Server error: ${response.statusText || "Unknown error"}`;
      }
      
      throw new Error(errorMessage);
      
    } catch (error) {
      console.error("Error submitting application:", error);
      const errorMessage = error instanceof Error ? error.message : "There was an error submitting your application";
      setSubmissionError(errorMessage);
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setResume(null);
    setCoverLetter(null);
    setConsentMarketing(false);
    setSubmissionError(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setFile: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const FileUploadField = ({
    id,
    label,
    file,
    setFile,
    accept,
  }: {
    id: string;
    label: string;
    file: File | null;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    accept: string;
  }) => (
    <div>
      <Label htmlFor={id} className="block mb-2">
        {label}
      </Label>
      {file ? (
        <div className="flex items-center justify-between p-2 border rounded-md bg-gray-50">
          <span className="text-sm truncate max-w-[200px]">{file.name}</span>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <button
              type="button"
              onClick={() => setFile(null)}
              className="text-gray-500 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Input
            id={id}
            type="file"
            accept={accept}
            onChange={(e) => handleFileUpload(e, setFile)}
            className="hidden"
          />
          <label
            htmlFor={id}
            className="flex items-center justify-center gap-2 p-2 border border-dashed rounded-md cursor-pointer hover:bg-gray-50"
          >
            <Upload className="h-4 w-4" />
            <span className="text-sm">Upload {label}</span>
          </label>
        </div>
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Apply for {job?.title}</DialogTitle>
          <DialogDescription>
            Please fill out the form below to apply for this position
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {submissionError && (
            <Alert variant="destructive">
              <AlertDescription>
                {submissionError}
              </AlertDescription>
            </Alert>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Why are you a good fit for this position?</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              required
            />
          </div>
          <div className="space-y-4">
            <FileUploadField
              id="resume"
              label="Resume"
              file={resume}
              setFile={setResume}
              accept=".pdf,.doc,.docx"
            />
            <FileUploadField
              id="coverLetter"
              label="Cover Letter (optional)"
              file={coverLetter}
              setFile={setCoverLetter}
              accept=".pdf,.doc,.docx"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consentMarketing"
              checked={consentMarketing}
              onCheckedChange={(checked) => setConsentMarketing(checked as boolean)}
            />
            <Label htmlFor="consentMarketing" className="text-sm">
              I agree to receive marketing communications from Detail Pros about job opportunities.
            </Label>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
