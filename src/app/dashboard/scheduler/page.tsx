'use client';

import React from 'react';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

//import Scheduler from "@/app/scheduler";

import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('@/app/scheduler'), { ssr: false })

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
      <NoSSR />
    </div>
  );
}
