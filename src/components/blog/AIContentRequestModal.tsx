
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { AIContentRequest, BlogService } from '@/services/BlogService';

interface AIContentRequestModalProps {
  onRequestComplete?: () => void;
}

const AIContentRequestModal: React.FC<AIContentRequestModalProps> = ({ 
  onRequestComplete 
}) => {
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('');
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [keywords, setKeywords] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic for your article",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const request: AIContentRequest = {
        topic,
        audience: audience || 'car owners',
        length,
        keywords: keywords.split(',').map(k => k.trim()).filter(Boolean)
      };
      
      const success = await BlogService.generateContentAndSendForApproval(request);
      
      if (success) {
        toast({
          title: "Content Request Submitted",
          description: "Your AI-generated draft will be sent to your email for approval."
        });
        
        // Reset form
        setTopic('');
        setAudience('');
        setLength('medium');
        setKeywords('');
        setIsOpen(false);
        
        if (onRequestComplete) {
          onRequestComplete();
        }
      } else {
        toast({
          title: "Request Failed",
          description: "There was an issue with your content request. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Request AI Article Draft</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Request AI-Generated Article</DialogTitle>
            <DialogDescription>
              Fill out the details below to generate an article draft. The draft will be sent to your email for approval before publishing.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="topic">Article Topic</Label>
              <Input
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Benefits of Regular Car Detailing"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Input
                id="audience"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                placeholder="e.g., Car owners in Cayman Islands"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="length">Article Length</Label>
              <Select
                value={length}
                onValueChange={(val: any) => setLength(val)}
              >
                <SelectTrigger id="length">
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short (300-500 words)</SelectItem>
                  <SelectItem value="medium">Medium (600-1000 words)</SelectItem>
                  <SelectItem value="long">Long (1000+ words)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="keywords">Keywords (comma separated)</Label>
              <Textarea
                id="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g., ceramic coating, paint protection, detailing"
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Requesting..." : "Generate Draft"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AIContentRequestModal;
