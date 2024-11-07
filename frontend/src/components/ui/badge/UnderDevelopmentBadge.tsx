import { Badge, BadgeProps } from './Badge';

type UnderDevelopmentBadgeProps = BadgeProps;

export const UnderDevelopmentBadge = (props: UnderDevelopmentBadgeProps) => {
  return (
    <Badge variant='default' {...props}>
      Under development
    </Badge>
  );
};
