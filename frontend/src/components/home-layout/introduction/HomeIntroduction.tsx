import Heading from '@/components/ui/heading/Heading';
import { Paragraph } from '@/components/ui/paragraph/Paragraph';
import Link from 'next/link';

export const HomeIntroduction = () => {
  return (
    <div>
      <Heading tag='h1'>Trello2.0</Heading>
      <Link href='https://github.com/GineTik/Trello2.0' target='_blank'>
        Learn more on github of the project
      </Link>
      <Paragraph>
        This project is next gen of trello. With powerful functionality to setup
        your workflow. Improve your productivity using features of this project.
      </Paragraph>
    </div>
  );
};
