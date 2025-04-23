import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  activeCategory: string = 'all';
  filteredPosts: BlogPost[] = [];
  
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'New Literacy Program Launches in Rural Communities',
      category: 'education',
      excerpt: 'Our foundation has initiated a new literacy program targeting underprivileged children in rural areas.',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      content: 'Full content about education program...'
    },
    {
      id: 2,
      title: 'Mobile Medical Camps Reach Remote Areas',
      category: 'healthcare',
      excerpt: 'Our mobile medical units have provided free healthcare services to over 5,000 individuals.',
      date: 'May 28, 2023',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      content: 'Full content about healthcare program...'
    },
    {
      id: 3,
      title: 'Vocational Training Graduation Ceremony',
      category: 'empowerment',
      excerpt: 'Celebrating the graduation of 120 women from our vocational training program.',
      date: 'May 10, 2023',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      content: 'Full content about empowerment program...'
    },
    {
      id: 4,
      title: 'Emergency Response to Flood-Affected Regions',
      category: 'disaster',
      excerpt: 'Our disaster relief team has been on the ground providing emergency supplies.',
      date: 'April 22, 2023',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      content: 'Full content about disaster relief...'
    },
    {
      id: 5,
      title: 'Clean Water Initiative: 10 New Wells Installed',
      category: 'community',
      excerpt: 'Our clean water initiative has successfully installed 10 new wells in communities.',
      date: 'April 5, 2023',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      content: 'Full content about community development...'
    },
    {
      id: 6,
      title: 'Community Gardens Project Yields First Harvest',
      category: 'food',
      excerpt: 'Our urban community gardens project has produced its first harvest.',
      date: 'March 18, 2023',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      content: 'Full content about food program...'
    }
  ];

  categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'empowerment', name: 'Women\'s Empowerment' },
    { id: 'disaster', name: 'Disaster Relief' },
    { id: 'community', name: 'Community Development' },
    { id: 'food', name: 'Food and Nutrition' }
  ];

  selectedPost: BlogPost | null = null;

  constructor() {
    this.filterPosts('all');
  }

  filterPosts(category: string) {
    this.activeCategory = category;
    if (category === 'all') {
      this.filteredPosts = [...this.blogPosts];
    } else {
      this.filteredPosts = this.blogPosts.filter(post => post.category === category);
    }
    this.selectedPost = null;
  }

  selectPost(post: BlogPost) {
    this.selectedPost = post;
  }

  backToList() {
    this.selectedPost = null;
  }

  
}