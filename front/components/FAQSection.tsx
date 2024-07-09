import React from 'react';
import FAQItem from '@/components/FAQItem';

export default function FAQSection() {
  const faqCategories = [
    {
      category: 'Général',
      faqs: [
        {
          question: 'Quelle est votre politique de remboursement?',
          answer: 'Notre politique de remboursement est de 30 jours, sans poser de questions.'
        },
        {
          question: 'Quels modes de paiement acceptez-vous?',
          answer: 'Nous acceptons les paiements par carte de crédit, PayPal et les virements bancaires.'
        }
      ]
    },
    {
      category: 'Commandes',
      faqs: [
        {
          question: 'Comment puis-je suivre ma commande?',
          answer: 'Vous pouvez suivre votre commande en utilisant le numéro de suivi envoyé à votre adresse e-mail.'
        },
        {
          question: 'Puis-je modifier ma commande après l’avoir passée?',
          answer: 'Oui, vous pouvez modifier votre commande dans les 24 heures suivant son passage.'
        }
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      {faqCategories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{category.category}</h3>
          {category.faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      ))}
    </section>
  );
}
