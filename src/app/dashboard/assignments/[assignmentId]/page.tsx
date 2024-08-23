import React from 'react';

import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials, getAssignment } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

export default function AssignmentCardPage({ params }: { params: { assignmentId: string } }) {
  const { assignmentId } = params;
  const assignment = getAssignment(assignmentId);

  return (
    <div className="w-full container mx-auto">
      <Link
        href="/dashboard/assignments"
        className="mb-6 flex flex-row items-center space-x-1 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 duration-200 transition-all"
        />
        <span>Back</span>
      </Link>
      <div className="flex flex-col items-start justify-between flex-1 h-full">
        <div className="flex flex-row items-center space-x-2 mb-2 ">
          <Avatar>
            <AvatarImage src={assignment?.image} alt={assignment?.name} />
            {assignment && (
              <AvatarFallback>{getInitials(assignment.name)}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-col">
            <h2 className="font-bold text-md">{assignment?.name}</h2>
            <span className="text-neutral-500 text-sm">{assignment?.role}</span>
          </div>
        </div>

        <p>{assignment?.description}</p>
      </div>
    </div>
  );
}
