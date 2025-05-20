
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  salary?: string;
  postedDate: string;
}

interface JobPostingCardProps {
  job: JobPosting;
  onApply: (jobId: string) => void;
}

const JobPostingCard = ({ job, onApply }: JobPostingCardProps) => {
  return (
    <Card className="mb-6 transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{job.title}</span>
          {job.salary && <span className="text-base text-detailpros-pink">{job.salary}</span>}
        </CardTitle>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{job.department}</span>
          </div>
          <span>• {job.location}</span>
          <span>• Posted {job.postedDate}</span>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <p className="mb-4 text-gray-600">{job.description}</p>
        
        <h4 className="mb-1 font-semibold">Key Responsibilities</h4>
        <ul className="mb-4 ml-6 list-disc text-sm text-gray-600">
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        
        <h4 className="mb-1 font-semibold">Requirements</h4>
        <ul className="ml-6 list-disc text-sm text-gray-600">
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onApply(job.id)}>Apply Now</Button>
      </CardFooter>
    </Card>
  );
};

export default JobPostingCard;
