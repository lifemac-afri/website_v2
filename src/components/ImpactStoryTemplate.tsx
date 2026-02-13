import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Sample impact story data structure
const defaultStory = {
  title: "Transforming Lives Through Education",
  subtitle: "A journey of growth and empowerment",
  author: {
    name: "Sarah Mensah",
    role: "Program Coordinator",
    image: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
    bio: "Sarah Mensah is a Program Coordinator with over 5 years of experience working with youth. She is passionate about education and mentorship."
  },
  date: "April 15, 2025",
  coverImage: "https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6b8qdQJSiEuNG8hTADv1Ubm0c4xjYpfSkXZoe",
  content: [
    {
      type: "paragraph",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
    },
    {
      type: "heading",
      text: "The Challenge"
    },
    {
      type: "paragraph",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
    },
    {
      type: "quote",
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela"
    }
  ],
  tags: ["Education", "Mentorship", "Youth Development", "Academic Success", "Personal Growth"]
};

const ImpactStoryTemplate = ({ story = defaultStory }) => {
  // Helper function to render different content types
  const renderContent = (content:any, index:any) => {
    switch (content.type) {
      case 'heading':
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{content.text}</h2>;
      case 'subheading':
        return <h3 key={index} className="text-xl  mt-6 mb-3">{content.text}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-4">{content.text}</p>;
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic my-6">
            <p>{content.text}</p>
            {content.author && <cite className="block text-sm mt-2">— {content.author}</cite>}
          </blockquote>
        );
      case 'image':
        return (
          <figure key={index} className="my-6">
            <img 
              src={content.src || "/api/placeholder/800/400"} 
              alt={content.alt || "Impact story image"} 
              className="rounded-lg w-full"
            />
            {content.caption && <figcaption className="text-sm text-center mt-2 text-gray-500">{content.caption}</figcaption>}
          </figure>
        );
      default:
        return <p key={index}>{content.text}</p>;
    }
  };

  return (
    <section className="py-12 bg-white">
    <div className="container mx-auto max-w-5xl px-4">
      {/* Story Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{story.title}</h1>
        {story.subtitle && <p className="text-xl text-gray-600">{story.subtitle}</p>}
        
        <div className="mt-8">
          <img 
            src={story.coverImage} 
            alt={`Cover image for ${story.title}`} 
            className="rounded-xl w-full max-h-96 object-cover"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-12 gap-8">
        {/* Story Content - Main Column */}
        <div className="md:col-span-10 md:col-start-2">
          <div className="prose prose-lg max-w-none">
            {/* Author info */}
            <div className="flex items-center gap-4 mb-8">
              <Avatar className="h-12 w-12">
                <AvatarImage src={story.author.image} alt={story.author.name} />
                <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="">{story.author.name}</p>
                <p className="text-sm text-gray-500">{story.author.role}</p>
                <p className="text-xs text-gray-400">{story.date}</p>
              </div>
            </div>

            {/* Render story content */}
            {story.content.map(renderContent)}
          </div>

          {/* Tags */}
          <div className="mt-12">
            <h3 className="text-sm  text-gray-500 mb-2">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag, index) => (
                <Badge key={index} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-slate-50 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={story.author.image} alt={story.author.name} />
                <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">About the Author</h3>
                <p className="text-sm ">
                  {story.author.name}, {story.author.role}
                </p>
                <p className="mt-2 text-gray-600">
                  {story.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - You can add custom content here if needed */}
        <div className="md:col-span-1">
          <div className="sticky top-6">
            {/* Sidebar content can be added here if needed in the future */}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ImpactStoryTemplate;