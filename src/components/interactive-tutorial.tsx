import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TutorialStep {
  id: number;
  title: string;
  instruction: string;
  image: string;
  action: string;
  completed: boolean;
}

interface InteractiveTutorialProps {
  title: string;
  steps: Omit<TutorialStep, 'completed'>[];
  onComplete: () => void;
}

export default function InteractiveTutorial({ title, steps, onComplete }: InteractiveTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [tutorialSteps, setTutorialSteps] = useState<TutorialStep[]>(
    steps.map(step => ({ ...step, completed: false }))
  );

  const progress = ((currentStep) / steps.length) * 100;

  const handleStepComplete = () => {
    const updatedSteps = [...tutorialSteps];
    updatedSteps[currentStep].completed = true;
    setTutorialSteps(updatedSteps);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const currentStepData = tutorialSteps[currentStep];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Card className="border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-4">{title}</CardTitle>
          <div className="mb-6">
            <div className="text-xl mb-2">단계 {currentStep + 1} / {steps.length}</div>
            <Progress value={progress} className="h-3" />
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 이미지 영역 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <img 
                src={currentStepData.image} 
                alt={currentStepData.title}
                className="w-full h-auto rounded-lg border-2 border-gray-200"
              />
            </div>

            {/* 설명 영역 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-800">
                {currentStepData.title}
              </h3>
              
              <p className="text-xl leading-relaxed text-gray-700">
                {currentStepData.instruction}
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-lg font-semibold text-blue-800">
                  해야 할 일: {currentStepData.action}
                </p>
              </div>

              <Button 
                onClick={handleStepComplete}
                className="w-full h-16 text-xl font-bold bg-green-600 hover:bg-green-700 text-white"
              >
                {currentStep < steps.length - 1 ? "다음 단계로" : "학습 완료"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}