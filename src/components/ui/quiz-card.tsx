import { AnimatedCard, CardContent, CardHeader, CardTitle } from "./card";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Button } from "./button";
import { ArrowRightIcon } from "lucide-react";
import { useQuizControl } from "@/contexts/QuizControl";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function QuizCard({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  const { verifyAnswer } = useQuizControl();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const memoizedOptions = React.useMemo(() => options, [options]);

  useEffect(() => {
    if (selectedOption) {
      console.log(selectedOption);
      verifyAnswer(selectedOption);
      setSelectedOption(null);
    }
  }, [selectedOption]);

  const handleChange = (value: string | null) => {
    setSelectedOption(value);
  };

  return (
    <AnimatePresence mode="wait">
      <AnimatedCard className="w-[400px]" key={title}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            defaultValue="comfortable"
            value={selectedOption || ""}
            onValueChange={handleChange}
          >
            {memoizedOptions.map((option, i) => (
              <div key={i} className="flex items-center space-x-2 w-full">
                <label
                  htmlFor={option}
                  className="flex items-center space-x-2 w-full hover:bg-neutral-200 p-2 rounded-lg cursor-pointer"
                >
                  <RadioGroupItem value={option} id={option} className="peer" />
                  <span className="font-[500] text-xl peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option}
                  </span>
                </label>
              </div>
            ))}
          </RadioGroup>
          <br />
          <Button
            variant="default"
            className="mt-4 block ml-auto"
            onClick={() => {
              verifyAnswer("skipped");
            }}
          >
            Next <ArrowRightIcon size={32} className="inline ml-2" />
          </Button>
        </CardContent>
      </AnimatedCard>
    </AnimatePresence>
  );
}
