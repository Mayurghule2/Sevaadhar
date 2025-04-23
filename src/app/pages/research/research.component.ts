import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent {
  title = 'charity-research-impact';
  methodologySteps = [
    {
      number: 1,
      title: 'Problem Identification',
      description: 'We work closely with communities to identify their most pressing challenges and understand the root causes of these issues through participatory needs assessments.'
    },
    {
      number: 2,
      title: 'Baseline Studies',
      description: 'Before implementing programs, we conduct comprehensive baseline studies to understand the current state of the community and establish benchmarks for measuring progress.'
    },
    {
      number: 3,
      title: 'Program Design',
      description: 'We design interventions based on evidence from previous research, best practices, and community input to ensure relevance and effectiveness.'
    },
    {
      number: 4,
      title: 'Implementation & Monitoring',
      description: 'During program implementation, we conduct ongoing monitoring to track progress, identify challenges, and make necessary adjustments.'
    },
    {
      number: 5,
      title: 'Impact Evaluation',
      description: 'We use rigorous evaluation methods, including randomized controlled trials when appropriate, to measure the causal impact of our interventions.'
    },
    {
      number: 6,
      title: 'Learning & Iteration',
      description: 'Research findings inform program improvements and shape our future strategic priorities, creating a cycle of continuous learning and adaptation.'
    }
  ];

  impactMeasurements = [
    {
      icon: '📊',
      title: 'Needs Assessment',
      description: 'Regular community assessments to identify evolving needs and priorities, ensuring our programs remain relevant and responsive.'
    },
    {
      icon: '📈',
      title: 'Program Evaluation',
      description: 'Rigorous monitoring and evaluation of all programs against established targets and outcomes to assess effectiveness and value.'
    },
    {
      icon: '📝',
      title: 'Impact Reporting',
      description: 'Transparent reporting of our progress, challenges, and impact to stakeholders, donors, and the communities we serve.'
    }
  ];

  keyFindings = [
    {
      title: 'Integrated Service Delivery',
      description: 'Holistic approaches that address multiple needs simultaneously show significantly greater impact than isolated interventions, particularly for the most vulnerable populations.'
    },
    {
      title: 'Community Participation',
      description: 'Programs designed and implemented with active community involvement show higher adoption rates, greater sustainability, and better outcomes.'
    },
    {
      title: 'Gender-Sensitive Approaches',
      description: 'Integrating gender considerations across all program areas yields multiplier effects that benefit entire families and communities.'
    },
    {
      title: 'Local Capacity Building',
      description: 'Investing in local leadership and institutional capacity creates more sustainable outcomes than direct service provision alone.'
    },
    {
      title: 'Technology Integration',
      description: 'Appropriate technology solutions can effectively bridge service gaps in remote and underserved areas when combined with human support systems.'
    },
    {
      title: 'Preventive Interventions',
      description: 'Early intervention and preventive approaches are more cost-effective than addressing crises after they occur, particularly in healthcare and disaster preparedness.'
    }
  ];

  partners = [
    {
      image: 'https://media.licdn.com/dms/image/v2/C4E0BAQFTGjjaJmKg2Q/company-logo_200_200/company-logo_200_200/0/1630607815827?e=2147483647&v=beta&t=SwzKJ6fI-nkeX4s8BtdKhK5kBXn8zXVaDFkLpgSS2g4',
      alt: 'University Partner'
    },
    {
      image: 'https://img.freepik.com/premium-vector/research-insight-logo-icon-vector-template_644408-1060.jpg',
      alt: 'Research Institution'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_cdD7q73iLWFsNCkt2vVR1ift8XnLEakHw&s',
      alt: 'International Development Organization'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCK6owDD2x37ooMBFV3F4eiA8X2yAHRV1og&s',
      alt: 'Local Research Network'
    },
    {
      image: 'https://in.childhelpfoundation.in//assets/img/successstories/stc.jpg',
      alt: 'Government Agency'
    },
    {
      image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGeQE-8nfW5RA/company-logo_200_200/company-logo_200_200/0/1631322793289?e=2147483647&v=beta&t=IllLVEYZpNKUwlooRC8Oead8eE1fUxqtFg799Nh5M1A',
      alt: 'Corporate Research Partner'
    }
  ];

  publications = [
    { icon: '📘', title: 'Annual Impact Reports' },
    { icon: '📊', title: 'Program Evaluation Briefs' },
    { icon: '📝', title: 'Case Studies' },
    { icon: '📄', title: 'White Papers' },
    { icon: '🔍', title: 'Research Methodologies' },
    { icon: '📋', title: 'Needs Assessment Tools' }
  ];

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/blank.pdf';  // Update with your actual PDF path
    link.download = 'Impact_Report_2023-24.pdf';     // Desired filename
    link.click();
  }
}
