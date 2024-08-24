'use client';

import React from 'react';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import Scheduler from "@/app/scheduler";

export default function TablePage() {
  return (
    <div className="w-full container mx-auto">
      <Link
        href="/dashboard"
        className="mb-6 flex flex-row items-center space-x-1 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 duration-200 transition-all"
        />
        <span>Dashboard</span>
      </Link>
      <Scheduler />
    </div>
  );
}
