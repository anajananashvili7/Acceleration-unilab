import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          join_community: "Join the Community",
          profile: "Profile",
          logout: "Logout",
          home: "Home",
          category: "Category",
          contact: "Contact",
          section_one_title: "One More Friend",
          section_one_subtitle: "Thousands More Fun!",
          section_one_description: "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!",
          view_intro: "View Intro",
          explore_now: "Explore Now",
        },
      },
      ka: {
        translation: {
          join_community: "შემოუერთდი საზოგადოებას",
          profile: "პროფილი",
          logout: "გამოსვლა",
          home: "მთავარი",
          category: "კატეგორია",
          contact: "კონტაქტი", 
          section_one_title: "ერთი დამატებითი მეგობარი",
          section_one_subtitle: "მილიარდზე მეტი სიხარული!",
          section_one_description: "მოწყობა მყოლია რაც იმას ნიშნავს, რომ თქვენ მეტი სიხარული გაქვთ, ახალი მეგობარი, ბედნიერი ადამიანი, რომელიც ყოველთვის თქვენს გვერდით იქნება. ჩვენ გვაქვს 200-ზე მეტი სხვადასხვა პეტი, რომლებიც თქვენს საჭიროებებს დააკმაყოფილებენ!",
          view_intro: "ნახეთ შეტყობინება",
          explore_now: "გამოიკვლიეთ ახლა",
        },
      },
      VDN: {
        translation: {
          // Your VDN translations
        },
      },
    },
    lng: 'en', // Default language (change 'VDN' to 'en' or 'ka' as appropriate)
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;