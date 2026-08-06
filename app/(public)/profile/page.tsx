import { redirect } from "next/navigation";

import { getCurrentUser } from "@/services/auth/get-current-user";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default async function ProfilePage() {

    const user = await getCurrentUser();

    if (!user) {
        redirect("/auth/login");
    }

    return (
        <div className="mx-auto max-w-3xl space-y-8">

            <h1 className="text-3xl font-bold">
                My Profile
            </h1>

            <Card>

                <CardHeader>

                    <CardTitle>
                        Account Information
                    </CardTitle>

                </CardHeader>

                <CardContent className="space-y-6">

                    <div>

                        <p className="text-sm text-muted-foreground">
                            Full Name
                        </p>

                        <p className="font-medium">
                            {user.name}
                        </p>

                    </div>

                    <div>

                        <p className="text-sm text-muted-foreground">
                            Email
                        </p>

                        <p className="font-medium">
                            {user.email}
                        </p>

                    </div>

                    <div>

                        <p className="text-sm text-muted-foreground">
                            Phone
                        </p>

                        <p className="font-medium">
                            {user.phone || "Not Provided"}
                        </p>

                    </div>

                    <div>

                        <p className="text-sm text-muted-foreground">
                            Role
                        </p>

                        <Badge>
                            {user.role}
                        </Badge>

                    </div>

                    <div>

                        <p className="text-sm text-muted-foreground">
                            Status
                        </p>

                        <Badge
                            variant={
                                user.status === "ACTIVE"
                                    ? "default"
                                    : "destructive"
                            }
                        >
                            {user.status}
                        </Badge>

                    </div>

                </CardContent>

            </Card>

        </div>
    );
}