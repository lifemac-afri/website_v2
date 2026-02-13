"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import React from 'react';
import { DataProvider } from '@/context/DataContext';


const ComponentRouter = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const pathname = usePathname();

    const isAdminPage = pathname.startsWith('/admin');
    const isLoginPage = pathname.startsWith('/login');

    return (
        <DataProvider>
            <div className="pt-20 overflow-x-hidden w-full">
                {!isAdminPage && !isLoginPage && <Header />}
                {children}
                {!isAdminPage && !isLoginPage && <Footer />}
            </div>
        </DataProvider>
    )
}

export default ComponentRouter