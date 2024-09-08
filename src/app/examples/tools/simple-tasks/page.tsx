"use client";

import { Button } from "@/components/ui/button";
import { generateTextAction } from "./action";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { readStreamableValue } from "ai/rsc";

export default function Page() {
  const [generation, setGeneration] = useState("");
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Stream Text Tool Simple Tasks</h1>
      <form
        action={async (data) => {
          const location = data.get("location") as string;
          const result = await generateTextAction(location);
          if (result) {
            for await (const delta of readStreamableValue(result)) {
              setGeneration(delta ?? "");
            }
          }
        }}
      >
        <Input name="location" required placeholder="Tell a Task" />
        <Button>Tell me a joke</Button>
      </form>
      <pre>{generation}</pre>
    </div>
  );
}
