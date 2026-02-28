import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: '100% TRUSTED',
        desc: 'TRUSTED IN THE WORDL 100%.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Design & Development',
        desc: 'High-quality design and scalable development focused on performance and usability.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'THE PANEL IS UPDATE',
        desc: 'WE FULLY UPDATED THE PANEL AND STILL GROW.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$3',
        desc: 'BEST FOR TEST.',
        credits: '15 DAY',
        features: [
            'BRUTAL',
            'ANTIBAN',
            'FULLY OPTIMIZED',
            '100% SAFE PANEL',
            'CHAT SUPPORT  +++'
        ]
    },
    {
        id: 'pro',
        name: '30 DAY',
        price: '$5',
        desc: 'GET 1 KEY.',
        credits: '30 DAY',
        features: [
            'BRUTAL',
            'ANTIBAN',
            'FULLY OPTIMIZED',
            '100% SAFE PANEL',
            'CHAT SUPPORT  +++'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'PERMANANT',
        price: '$8',
        desc: 'GET 1 KEY',
        credits: 'Permanant',
        features: [
            'BRUTAL',
            'ANTIBAN',
            'FULLY OPTIMIZED',
            '100% SAFE PANEL',
            'CHAT SUPPORT  +++'
        ]
        popular: true
    }
];

export const faqData = [
    {
        question: 'What services does your agency provide?',
        answer: 'We offer end-to-end digital services including brand strategy, UI/UX design, web and app development and growth-focused marketing solutions.'
    },
    {
        question: 'Do you work with startups or only large companies?',
        answer: 'We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.'
    },
    {
        question: 'Do you offer ongoing support after launch?',
        answer: 'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Contact",
        links: [
            { name: "TELEGRAM", url: "t.me/sewybet710" },
            { name: "wa", url: "#" },
            { name: "dc", url: "#" }
        ]
    }
];