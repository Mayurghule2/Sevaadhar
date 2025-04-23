// funding-section.component.ts
import { Component } from '@angular/core';

interface FundingSource {
  title: string;
  description: string;
}

@Component({
  selector: 'app-fundingsection',
  templateUrl: './fundingsection.component.html',
  styleUrls: ['./fundingsection.component.css']
})
export class FundingsectionComponent {
  fundingSources: FundingSource[] = [
    {
      title: 'Donations',
      description: 'Generous contributions from individuals, corporations, and foundations that believe in our mission and impact.'
    },
    {
      title: 'Grants',
      description: 'Funding received from government agencies, foundations, and organizations supporting charitable initiatives.'
    },
    {
      title: 'Events and Fundraisers',
      description: 'Regular events, campaigns, and fundraising initiatives organized to generate support and awareness for our causes.'
    },
    {
      title: 'Corporate Partnerships',
      description: 'Collaborations with companies for sponsorships, donations, and CSR initiatives aligned with our mission.'
    }
  ];
}