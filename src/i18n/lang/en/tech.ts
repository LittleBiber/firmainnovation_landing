import { ITech } from '../..';

const Tech = {
    title: 'Smart Electronic Contracts powered by LLM',
    desc: `Integrating blockchain infrastructure with Large Language Models (LLMs) marks a breakthrough in the electronic contract industry. \nBy LLMs' intelligent, context-aware processing, we create a next-generation ecosystem\nfor contract management, negotiation, and execution.\nLet us explore how this technology can transform the industry.`,

    asIs: {
        title: 'Providing reliable contract solutions through stable and efficient processes.',

        minify: {
            title: 'Simplified Contract Process',
            tags: ['Standardized Templates', 'Data-Driven Analysis']
        },
        efficiency: {
            title: 'Enhanced Contract Efficiency',
            tags: ['Reliable E-Contracts', 'Improved Efficiency']
        },
        security: {
            title: 'Secure and Reliable System',
            tags: ['Blockchain Security', 'Transparent Versions']
        },
        nego: {
            title: 'Negotiation and Collaboration',
            tags: ['Use of Collab Tools', 'Fast Communication']
        },
        tracking: {
            title: 'Real-Time Tracking',
            tags: ['Systematic Tracking', 'Timely Updates']
        },
        insight: {
            title: 'Historical Data Analysis',
            tags: ['Business Insights', 'Data-Driven Strategy']
        }
    },

    toBe: {
        title: 'Smarter, automated contracting powered by LLM.',

        intelligentContract: {
            title: 'Intelligent Contract Drafting\nand Customization',
            tags: [],
            detail: [
                {
                    title: '01. LLM-Powered Drafting',
                    desc: `The system generates tailored contract templates using LLMs that analyze user inputs, industry standards, and legal requirements. Natural language processing ensures precision and compliance while minimizing the need for legal expertise.`
                },
                {
                    title: '02. Dynamic Clause Adaptation',
                    desc: `The system recommends optimal clauses by analyzing historical data, negotiation patterns, and risk factors, tailoring each contract to specific requirements.`
                }
            ]
        },
        automatedContract: {
            title: 'Automated Smart Contract\nConversion',
            tags: [],
            detail: [
                {
                    title: '01. Natural Language to Smart Contract\nTranslation',
                    desc: `LLMs convert traditional contract terms into executable smart-contracts on a blockchain, ensuring automated contract conditions while minimizing manual effort and errors.`
                },
                {
                    title: '02. Compliance Validation',
                    desc: `The system analyzes contracts for legal compliance and flags inconsistencies, providing automated verification before deployment.`
                }
            ]
        },
        enforcedNego: {
            title: 'Enhanced\nNegotiation and Collaboration',
            tags: [],
            detail: [
                {
                    title: '01. AI-Assisted Negotiation',
                    desc: `The platform uses LLMs to streamline negotiations by analyzing terms from all parties and suggesting mutually beneficial compromises. This approach reduces friction and speeds up contract completion.`
                },
                {
                    title: '02. Real-Time Feedback',
                    desc: `During contract creation, users receive AI-generated insights about potential risks, ambiguous terms, and areas needing improvement.`
                }
            ]
        },
        enforcedSecurity: {
            title: 'Immutable and Transparent\nRecord Keeping',
            tags: [],
            detail: [
                {
                    title: '01. Blockchain Security',
                    desc: `All contracts are stored on a decentralized blockchain, ensuring they are immutable, tamper-proof, and fully auditable.`
                },
                {
                    title: '02. Transparent Version Control',
                    desc: `All contract modifications are recorded on the blockchain, providing a complete and trustworthy history of negotiations and amendments.`
                }
            ]
        },
        automatedLifeCycle: {
            title: 'Automated Lifecycle Management',
            tags: [],
            detail: [
                {
                    title: '01. Event-Triggered Execution',
                    desc: `Smart-contracts automatically execute clauses when predefined conditions are met, such as completed payments or achieved milestones.`
                },
                {
                    title: '02. AI-Driven Notifications',
                    desc: `The system monitors contract lifecycles and automatically alerts stakeholders about upcoming deadlines, renewal dates, and potential breaches.`
                }
            ]
        },
        insightBasedOnData: {
            title: 'Data-Driven Insights',
            tags: [],
            detail: [
                {
                    title: '01. Contract Analytics',
                    desc: `The platform analyzes historical contracts using LLMs to extract actionable insights, including common areas of dispute, high-risk terms, and frequently negotiated clauses.`
                },
                {
                    title: '02. Trend Forecasting',
                    desc: `AI analyzes market trends to provide insights that help organizations make well-informed contract decisions.`
                }
            ]
        }
    }
} satisfies ITech;

export default Tech;
