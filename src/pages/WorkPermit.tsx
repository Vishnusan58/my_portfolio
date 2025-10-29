import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);

  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">Work Authorization</h2>
        <p className="work-permit-summary">
          {workPermitData.summary}
        </p>
        <p className="work-permit-summary">
          I hold <strong>{workPermitData.visaStatus}</strong> and can contribute immediately to teams across India and
          remote-first companies. My current passport and documentation are valid until{' '}
          <strong>{new Date(workPermitData.expiryDate).toLocaleDateString()}</strong>.
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
