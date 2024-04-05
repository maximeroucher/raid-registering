"use client";

import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { ChartView } from "./ChartView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const data = [
  {
    label: "Expert",
    value: 240,
  },
  {
    label: "Sportif",
    value: 300,
  },
  {
    label: "Découverte",
    value: 200,
  },
];

export const StatsView = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Statistiques</CardTitle>
        <CardDescription>
            Ne porte que sur les équipes validées
        </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="difficulty">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="difficulty">Parcours</TabsTrigger>
            <TabsTrigger value="meetingPlace">Départ</TabsTrigger>
            <TabsTrigger value="bikeSize">VTT</TabsTrigger>
            <TabsTrigger value="tShirtSize">T-Shirt</TabsTrigger>
          </TabsList>
          <TabsContent value="difficulty">
            <ChartView data={data} />
          </TabsContent>
          <TabsContent value="meetingPlace">
            <ChartView data={data} />
          </TabsContent>
          <TabsContent value="bikeSize">
            <ChartView data={data} />
          </TabsContent>
          <TabsContent value="tShirtSize">
            <ChartView data={data} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
