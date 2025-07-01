"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const servicesData = {
    "website-development": {
        title: "Website Development",
        image: "/images/services/web.jpg",
        description:
            "Our website development services focus on building fast, responsive, and SEO-friendly websites tailored to your business needs. We use modern technologies like React, Next.js, and TailwindCSS to ensure performance and scalability.",
        details: `
      We craft elegant websites that balance aesthetics and functionality. From single-page marketing sites to complex CMS-powered platforms, we ensure cross-browser compatibility, security, and accessibility throughout the development lifecycle.
      
      Key features:
      - SEO optimization
      - Responsive design
      - CMS integration (Sanity, WordPress)
      - Performance tuning
    `,
    },
    "mobile-application-development": {
        title: "Mobile Application Development",
        image: "/images/services/mobile.jpg",
        description:
            "We design and develop high-performance mobile applications for both Android and iOS using modern frameworks like Flutter and React Native.",
        details: `
      We build intuitive and user-friendly apps tailored to your target audience. Our mobile solutions integrate seamlessly with APIs, deliver fluid UX, and are optimized for battery and performance.

      Key features:
      - Cross-platform (iOS & Android)
      - Clean UI/UX
      - API integration
      - Push notifications
    `,
    },
    "cloud-app-dev": {
        title: "Cloud Application Development",
        image: "/images/services/cloud.jpg",
        description:
            "Build and deploy scalable, cloud-native applications using AWS, Azure, or Google Cloud. Our team specializes in microservices, serverless architecture, and CI/CD pipelines.",
        details: `
      We create resilient cloud-based systems with automated scaling, load balancing, and failover mechanisms. From backend APIs to frontend UIs, everything is cloud-optimized.

      Key features:
      - Microservice architecture
      - Cloud storage & databases
      - Kubernetes / Docker
      - DevOps integration
    `,
    },
    "custom-software-development": {
        title: "Custom Software Development",
        image: "/images/services/custom.jpg",
        description:
            "We develop tailor-made software to solve your specific business challenges, whether it's workflow automation, analytics, or ERP integration.",
        details: `
      Custom-built from scratch or extending existing solutions, our team collaborates closely with stakeholders to design, develop, and deploy solutions that fit perfectly.

      Key features:
      - Requirement analysis
      - System design
      - Secure and scalable code
      - Long-term maintenance
    `,
    },
    "saas-development": {
        title: "SaaS (Software as a Service) Development",
        image: "/images/services/saas.jpg",
        description:
            "Transform your idea into a profitable SaaS product. We handle everything from MVP to full-scale deployment.",
        details: `
      Our SaaS solutions support user management, billing systems, subscription logic, role-based access, and third-party API integration. Built for scale and security.

      Key features:
      - Multi-tenancy support
      - Secure authentication
      - Subscription & billing
      - Monitoring & analytics
    `,
    },
    "iot-and-robotics-development": {
        title: "IoT & Robotics Development",
        image: "/images/services/iot.jpg",
        description:
            "From embedded firmware to cloud dashboards, we build smart IoT and robotics solutions across industries.",
        details: `
      Our team develops connected devices and robots with real-time data processing, automation, and remote control via cloud.

      Key features:
      - Sensor integration
      - IoT dashboards
      - Edge computing
      - Robotics firmware & AI
    `,
    },
    "desktop-software-development": {
        title: "Desktop Software Development",
        image: "/images/services/desktop.jpg",
        description:
            "Build robust Windows, macOS, and Linux desktop apps for business or commercial use using Electron, .NET, or native stacks.",
        details: `
      From utility tools to enterprise platforms, we ensure native performance, security, and seamless offline support.

      Key features:
      - Cross-platform (Electron)
      - Native APIs
      - Auto updates
      - Rich UI
    `,
    },
    "application-security-services": {
        title: "Application Security Services",
        image: "/images/services/security.jpg",
        description:
            "Secure your apps against threats with our end-to-end application security services, including code audits, penetration testing, and compliance checks.",
        details: `
      We identify vulnerabilities, patch weaknesses, and implement best practices to ensure your software is safe and compliant.

      Key features:
      - OWASP top 10 compliance
      - Static & dynamic analysis
      - Penetration testing
      - Secure SDLC integration
    `,
    },
};

export default function ServiceDetailPage() {
    const { slug } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (slug && servicesData[slug]) {
            setData(servicesData[slug]);
        }
    }, [slug]);

    if (!data) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
                Service not found.
            </div>
        );
    }

    return (
        <main className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-[150px] bg-white text-[#111]">
            <div className="max-w-4xl mx-auto">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-72 object-cover rounded-xl mb-8"
                />
                <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{data.description}</p>
                <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                    {data.details}
                </div>
            </div>
        </main>
    );
}