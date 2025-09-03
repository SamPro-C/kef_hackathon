import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
          <CardDescription>All time</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$45,231.89</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Subscriptions</CardTitle>
          <CardDescription>Active</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+2350</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sales</CardTitle>
          <CardDescription>This month</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+12,234</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Now</CardTitle>
          <CardDescription>Online</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+573</p>
        </CardContent>
      </Card>
    </div>
  );
}
