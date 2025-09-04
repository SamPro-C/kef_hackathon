
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });
  
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="text-center border-b pb-6">
            <CardTitle className="font-headline text-4xl text-primary">Privacy Policy</CardTitle>
            <p className="text-muted-foreground pt-2">Last Updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="p-8 md:p-10 space-y-6 text-foreground/90">
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p>
                Welcome to KEF Journey 98%. This website is a hackathon project entry and not the official website of the Kenya Education Fund (KEF). This privacy policy explains how we handle information for this demonstration project. As this is a project and not a live service, our data handling practices are minimal.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p>
                For the "Alumni Multiplier" feature, we collect the following user-provided input to generate a story:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
                <li>Selected County</li>
                <li>Selected Career Field</li>
              </ul>
              <p className="mt-2">
                This information is used solely for the purpose of the AI story generation and is not stored, tracked, or associated with any personal user data. We do not use cookies for tracking and we do not require user accounts.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>
                The inputs you provide are sent to a generative AI model to create a fictional story. The information is processed in real-time and is not logged or saved on our servers or by any third-party service for future use, other than standard, temporary processing logs for operational purposes which are not used for user analysis.
              </p>
            </section>
             <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">4. Data Security</h2>
              <p>
                We are committed to ensuring that your information is secure. While this project does not handle sensitive personal data, we use standard security measures to protect the integrity of the application.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">5. Third-Party Services</h2>
              <p>
                This website uses Google Fonts and may use other third-party libraries for functionality. These services may have their own privacy policies. We do not share any user-provided data with these services.
              </p>
            </section>
             <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">6. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
              </p>
            </section>
             <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please note that this is a conceptual project for a hackathon and there is no formal contact channel.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
