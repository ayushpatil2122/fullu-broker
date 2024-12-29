import Hero from "@/components/Hero";
import LoanNotificationBanner from "@/components/LoanNotificationBanner";
import ServicesSection from "@/components/ServicesSection";
import StatisticsSection from "@/components/StatisticsSection";

export default function Home() {
  return (
   <>
    <Hero/>
    <LoanNotificationBanner/>
    <ServicesSection/>
    <StatisticsSection/>
   </>
  );
}
