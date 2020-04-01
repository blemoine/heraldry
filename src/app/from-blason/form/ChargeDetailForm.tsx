import * as React from 'react';
import { Charge } from '../../model/charge';
import { cannotHappen } from '../../../utils/cannot-happen';
import { LionForm } from './charges/LionForm';
import { EagleForm } from './charges/EagleForm';
import { FleurDeLysForm } from './charges/FleurDeLysForm';
import { RoundelForm } from './charges/RoundelForm';
import { LozengeForm } from './charges/LozengeForm';
import { CrossForm } from './charges/CrossForm';
import { MulletForm } from './charges/MulletForm';
import { EscutcheonForm } from './charges/EscutcheonForm';
import { CrownForm } from './charges/CrownForm';

type Props = { charge: Charge; chargeChange: (charge: Charge) => void };
export function ChargeDetailForm({ charge, chargeChange }: Props) {
  if (charge.name === 'lion') {
    return <LionForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'eagle') {
    return <EagleForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'fleurdelys') {
    return <FleurDeLysForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'escutcheon') {
    return <EscutcheonForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'roundel') {
    return <RoundelForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'lozenge') {
    return <LozengeForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'cross') {
    return <CrossForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'mullet') {
    return <MulletForm charge={charge} chargeChange={chargeChange} />;
  } else if (charge.name === 'crown') {
    return <CrownForm charge={charge} chargeChange={chargeChange} />;
  } else {
    return cannotHappen(charge);
  }
}
