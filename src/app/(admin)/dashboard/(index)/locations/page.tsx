import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { getLocation } from "./lib/data";
import Link from "next/link";

export default async function CategoriesPage() {
  const data = await getLocation();

  return (
    <div className="space-y-4">
      <div className="text-right">
        <Button size="sm" className="h-7 gap-1" asChild>
          <Link href="/dashboard/locations/create">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Locations
            </span>
          </Link>
        </Button>
      </div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Locations</CardTitle>
          <CardDescription>
            Manage your locations and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data}></DataTable>
        </CardContent>
      </Card>
    </div>
  );
}
