import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const srcDir = '/Users/philturnbull/.gemini/antigravity/brain/53dcc717-b5ca-4097-8e4f-cea308b75411/';
    const destDir = path.join(process.cwd(), 'public/images');
    
    const files = {
      'ug_coordination_1777091683015.png': 'ug_coordination.png',
      'clinical_assessment_1777091701874.png': 'clinical_assessment.png',
      'pg_teaching_1777091715975.png': 'pg_teaching.png',
      'interactive_learning_1777091769296.png': 'interactive_learning.png',
      'external_review_1777091783070.png': 'external_review.png',
      'pg_examination_1777091795369.png': 'pg_examination.png'
    };

    const results = [];
    for (const [src, dest] of Object.entries(files)) {
      const srcPath = path.join(srcDir, src);
      const destPath = path.join(destDir, dest);
      
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        results.push(`Copied ${src} to ${dest}`);
      } else {
        results.push(`Missing ${src}`);
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
