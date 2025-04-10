import CodeGallery from '../../components/LiveCodePreview';
import { galleryProject } from '../data/projects';

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <CodeGallery project={galleryProject} />
    </div>
  );
}
