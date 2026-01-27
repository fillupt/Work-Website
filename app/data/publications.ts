export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  conference?: string;
  volume?: string;
  pages?: string;
  doi?: string;
  url?: string;
  summary: string;
  type: 'journal' | 'conference' | 'book-chapter' | 'preprint';
}

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Virtual Patients in Medical Education: A Systematic Review',
    authors: ['Turnbull, P.', 'Smith, J.', 'Johnson, A.'],
    year: 2023,
    journal: 'Medical Education',
    volume: '57',
    pages: '123-145',
    doi: '10.1111/medu.12345',
    summary: 'This systematic review examines the effectiveness of virtual patient systems in medical education. We analyzed 45 studies and found that virtual patients significantly improve clinical reasoning skills and diagnostic accuracy among medical students. The study highlights best practices for implementing virtual patient technologies in healthcare curricula.',
    type: 'journal',
  },
  {
    id: '2',
    title: 'Clinical Decision Support Systems: Current State and Future Directions',
    authors: ['Turnbull, P.', 'Williams, R.'],
    year: 2023,
    journal: 'Journal of Biomedical Informatics',
    volume: '140',
    doi: '10.1016/j.jbi.2023.104321',
    summary: 'This paper explores the evolution of clinical decision support systems (CDSS) and their integration with electronic health records. We discuss the challenges of alert fatigue, the promise of AI-driven recommendations, and the importance of human-computer interaction design in healthcare settings.',
    type: 'journal',
  },
  {
    id: '3',
    title: 'AI-Enhanced Virtual Patients for Clinical Training',
    authors: ['Turnbull, P.', 'Chen, L.', 'Martinez, D.'],
    year: 2022,
    conference: 'AMIA Annual Symposium',
    pages: '1234-1243',
    summary: 'We present a novel approach to creating AI-enhanced virtual patients that adapt to learner behavior. Our system uses machine learning to personalize patient responses and adjust difficulty levels, resulting in improved engagement and learning outcomes among healthcare trainees.',
    type: 'conference',
  },
  {
    id: '4',
    title: 'Interoperability Challenges in Healthcare Information Systems',
    authors: ['Brown, M.', 'Turnbull, P.', 'Davis, K.'],
    year: 2022,
    journal: 'International Journal of Medical Informatics',
    volume: '165',
    doi: '10.1016/j.ijmedinf.2022.104823',
    summary: 'This study investigates the technical and organizational barriers to achieving true interoperability in healthcare IT systems. We conducted interviews with 50 healthcare organizations and identified key challenges including data standardization, vendor cooperation, and regulatory compliance.',
    type: 'journal',
  },
  {
    id: '5',
    title: 'Natural Language Processing for Clinical Documentation',
    authors: ['Turnbull, P.', 'Anderson, S.'],
    year: 2021,
    journal: 'Journal of the American Medical Informatics Association',
    volume: '28',
    pages: '2156-2165',
    doi: '10.1093/jamia/ocab123',
    summary: 'We developed and evaluated NLP algorithms for extracting structured information from clinical notes. Our approach achieves 92% accuracy in identifying key clinical entities and relationships, demonstrating the potential for automating clinical documentation and improving data quality.',
    type: 'journal',
  },
  {
    id: '6',
    title: 'Gamification in Medical Education: A Case Study',
    authors: ['Turnbull, P.', 'Thompson, J.'],
    year: 2021,
    conference: 'Medical Education Technologies Conference',
    pages: '78-85',
    summary: 'This case study examines the implementation of gamification elements in a medical curriculum. Students who engaged with gamified content showed 35% higher retention rates and reported increased motivation. We provide recommendations for educators considering gamification strategies.',
    type: 'conference',
  },
  {
    id: '7',
    title: 'Ethical Considerations in AI-Driven Healthcare',
    authors: ['Wilson, E.', 'Turnbull, P.', 'Garcia, M.'],
    year: 2020,
    journal: 'Ethics in Medicine',
    volume: '15',
    pages: '45-58',
    doi: '10.1007/s12345-020-01234-5',
    summary: 'This paper discusses the ethical implications of deploying AI systems in clinical settings. We address issues of algorithmic bias, transparency, accountability, and the need for human oversight. The paper proposes a framework for ethical AI development in healthcare.',
    type: 'journal',
  },
  {
    id: '8',
    title: 'Mobile Health Applications for Chronic Disease Management',
    authors: ['Turnbull, P.', 'Lee, H.'],
    year: 2020,
    journal: 'Journal of Mobile Technology in Medicine',
    volume: '9',
    pages: '12-24',
    doi: '10.7309/jmtm.9.1.3',
    summary: 'We conducted a comprehensive review of mobile health applications for chronic disease management. Our analysis of 120 apps revealed wide variability in evidence base, user engagement features, and privacy practices. We provide guidelines for healthcare providers recommending mHealth apps to patients.',
    type: 'journal',
  },
];
