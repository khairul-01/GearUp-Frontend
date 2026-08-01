import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface AuthCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardHeader>
        <h1 className="text-2xl font-bold">
          {title}
        </h1>

        <p className="text-muted-foreground">
          {description}
        </p>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}