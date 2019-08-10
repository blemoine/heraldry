import * as React from 'react';
import { FleurDeLys } from '../../../model/charge';
import { TinctureSelect } from '../TinctureSelect';
import { Tincture } from '../../../model/tincture';
import { CountAndDisposition } from '../../../model/countAndDisposition';
import { CountAndDispositionForm } from '../CountAndDispositionForm';

type Props = { charge: FleurDeLys; chargeChange: (fleurDeLys: FleurDeLys) => void };
export const FleurDeLysForm = ({ charge, chargeChange }: Props) => {
  function chargeTinctureChange(tincture: Tincture) {
    chargeChange({ ...charge, tincture });
  }

  function countAndDispositionChange(countAndDisposition: CountAndDisposition) {
    chargeChange({ ...charge, countAndDisposition });
  }

  return (
    <>
      <div className="col">
        <div className="form-group">
          <label>Select the tincture of the charge</label>
          <TinctureSelect tincture={charge.tincture} tinctureChange={chargeTinctureChange} />
        </div>
      </div>
      <CountAndDispositionForm
        countAndDisposition={charge.countAndDisposition}
        countAndDispositionChange={countAndDispositionChange}
      />
    </>
  );
};
