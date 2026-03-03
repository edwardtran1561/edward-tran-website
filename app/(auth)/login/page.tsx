import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/login-form";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const LoginPage = () => {
  return (
    <Card className="w-lg max-w-full">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <LogIn /> Edward Tran Login
        </CardTitle>
        <CardDescription>Login to use Admin's feature</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          className="cursor-pointer"
          type="submit"
          form="login-form"
        >
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
