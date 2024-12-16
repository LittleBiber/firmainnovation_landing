import { IUseCase } from '../..';

const UseCase = {
    type1Example: [
        {
            index: 1,
            title: 'Cross-Border Trade Agreements',
            desc: 'Imagine a scenario where two international companies need to establish a trade agreement.\nThis merged technology could:',
            list: [
                {
                    title: 'Draft a legally compliant contract in minutes',
                    desc: 'Creating contracts tailored to the trade’s specifics, using LLM.'
                },
                {
                    title: 'Translate the terms into multiple languages',
                    desc: 'Multiple languages translation for cross-border understanding.'
                },
                {
                    title: 'Convert the terms into a smart contract',
                    desc: 'for automatic execution of payments and deliveries;\nall recorded securely on the blockchain.'
                },
                {
                    title: 'Provide real-time AI feedback',
                    desc: 'Provide real-time AI feedback on compliance with\ninternational trade laws, mitigating risk for both parties.'
                }
            ]
        }
    ],
    type2Example: [
        {
            index: 2,
            caseTitle: 'Financial Derivative Contracts',
            caseDesc:
                'Financial derivatives are difficult for individual investors to access due to their complex structure and execution conditions.\nLLM and blockchain technology are used to solve this.\nWhen conditions are entered in natural language, the LLM converts them into blockchain smart contracts and executes them.',
            sections: [
                {
                    title: '1. Futures and Options Contracts with LLM Application',
                    example: '"Execute the call option if the ETH price rises above 2000 USDT."',
                    features: [
                        {
                            title: 'Simplification of Complex Financial Contracts',
                            desc: 'Allows anyone to easily understand and use.'
                        },
                        {
                            title: 'Automated Condition Monitoring and Execution',
                            desc: 'Automates condition monitoring and execution,\nreducing the management burden for investors.'
                        }
                    ]
                },
                {
                    title: '2. Risk Hedging with LLM Application',
                    example: '"Generate a hedging contract for my portfolio if oil prices drop by more than 10%."',
                    features: [
                        {
                            title: 'Hedging Contracts from Market Data Analysis',
                            desc: 'Automatically generates tailored hedging contracts, minimizing\nthe risk of loss by preparing for predictable market fluctuations.'
                        }
                    ]
                }
            ]
        }
    ]
} satisfies IUseCase;

export default UseCase;
