"use client";
import { Button } from "@/components/ui/button";

export default function Page() {
  const handleButtonClick = () => {
    alert("Dit me may");
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Test</Button>
    </div>
  );
}
