import { Button } from '@/components/ui/button/Button';
import Heading from '@/components/ui/heading/Heading';
import { Paragraph } from '@/components/ui/paragraph/Paragraph';
import Link from 'next/link';
import { IoLinkOutline } from 'react-icons/io5';

export const HomeIntroduction = () => {
  return (
    <div className='flex flex-col items-start'>
      <div className='flex gap-3 items-center mb-3'>
        <Heading tag='h1'>Trello2.0</Heading>
        <Button
          asChild
          variant='underline_hover_background'
          size='sm'
          className=''
        >
          <Link href='https://github.com/GineTik/Trello2.0' target='_blank'>
            <IoLinkOutline />
            Learn more on github of the project
          </Link>
        </Button>
      </div>
      <Paragraph>
        This project is next gen of trello. With powerful functionality to setup
        your workflow. Improve your productivity using features of this project.
      </Paragraph>
    </div>
  );
};
