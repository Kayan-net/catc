// src/components/ClientSessionProvider.js
'use client';

import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";

export default function ClientSessionProvider({ children }) {
    const [analyticsInitialized, setAnalyticsInitialized] = useState(false);

    useEffect(() => {
        // Initialize Analytics only on the client side and only once
        if (typeof window !== 'undefined' && !analyticsInitialized) {
            try {
                const analytics = getAnalytics(getApp());
                logEvent(analytics, 'page_view');
                setAnalyticsInitialized(true);
            } catch (e) {
                console.error("Error initializing analytics", e)
            }
        }
    }, [analyticsInitialized]);

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}