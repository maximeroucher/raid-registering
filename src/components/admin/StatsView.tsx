"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import { ChartView } from "./ChartView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useState } from "react";

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
  const [seeAll, setSeeAll] = useState(false);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="grid gap-2">
          <CardTitle>Statistiques</CardTitle>
          <CardDescription>
            {seeAll
              ? "Porte sur toutes les équipes"
              : "Ne porte que sur les équipes validées"}
          </CardDescription>
        </div>
        <div className="items-center space-x-2 grid gap-2">
          <Switch
            id="airplane-mode"
            checked={seeAll}
            onCheckedChange={setSeeAll}
          />
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
