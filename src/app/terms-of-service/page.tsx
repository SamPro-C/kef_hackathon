
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
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
            <CardTitle className="font-headline text-4xl text-primary">Terms of Service</CardTitle>
            <p className="text-muted-foreground pt-2">Last Updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="p-8 md:p-10 space-y-6 text-foreground/90">
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, KEF Journey 98%, you agree to be bound by these Terms of Service. This website is a hackathon project entry and is provided for demonstration purposes only. It is not the official website of the Kenya Education Fund (KEF).
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">2. Use of the Service</h2>
              <p>
                This service is intended to showcase a conceptual web application. You may use the features of this site, such as the "Alumni Multiplier" story generator, for personal, non-commercial evaluation purposes. You agree not to use the service for any unlawful purpose.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">3. Intellectual Property</h2>
              <p>
                The design, branding, and original content created for this project are the property of its creators for the purpose of the hackathon. The name "Kenya Education Fund" and any associated branding are the property of the Kenya Education Fund. This project is not affiliated with, nor endorsed by, KEF.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">4. Disclaimers and Limitation of Liability</h2>
              <p>
                This website is provided "as is," without any warranties of any kind. We do not guarantee the accuracy of any information or generated content. The stories created by the AI are fictional and for illustrative purposes only. In no event shall the creators of this project be liable for any claim, damages, or other liability arising from the use of this website.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">5. Governing Law</h2>
              <p>
               As a conceptual project, any disputes or claims related to this website will be handled informally, as there is no formal legal entity behind this demonstration project.
              </p>
            </section>
             <section>
              <h2 className="font-headline text-2xl font-bold text-foreground mb-3">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
