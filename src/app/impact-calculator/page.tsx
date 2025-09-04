
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import ImpactCalculator from '@/components/impact-calculator';


export default function ImpactCalculatorPage() {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Impact Calculator</h1>
            <ImpactCalculator />
        </div>
    )
}
