'use client';

import React from 'react';

import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import Dashboard from "@/app/dashboard-01";

export default function DashboardRoute() {
  return (
    <div className="w-full container mx-auto">
      <Link
        href="/"
        className="mb-6 flex flex-row items-center space-x-1 group"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 duration-200 transition-all"
        />
        <span>Home</span>
      </Link>
      <Dashboard />
    </div>
  );
}