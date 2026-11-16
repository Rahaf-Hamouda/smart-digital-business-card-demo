import { useEffect, useRef, useState } from 'react';
import { Check, Download } from 'lucide-react';
import { ActionBadge } from '@/shared/ui/ActionBadge';
import { profileConfig } from '@/shared/config/profileConfig';
import { downloadVCard } from '../lib/generateVCard';

export function SaveContactButton() {
  const [saved, setSaved] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const handleSave = () => {
    downloadVCard(profileConfig);
    setSaved(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setSaved(false), 2600);
  };

  return (
    <>
      <ActionBadge
        variant="primary"
        layout="stacked"
        onClick={handleSave}
        aria-label="حفظ جهة الاتصال كملف VCF"
        icon={
          saved ? (
            <Check className="h-5 w-5" strokeWidth={2.6} />
          ) : (
            <Download className="h-5 w-5" strokeWidth={2.2} />
          )
        }
        label={saved ? 'تم الحفظ' : 'حفظ الاتصال'}
      />
      <span role="status" className="sr-only">
        {saved ? 'تم حفظ جهة الاتصال على جهازك' : ''}
      </span>
    </>
  );
}
