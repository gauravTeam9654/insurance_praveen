import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../src/firebase/config';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  createdAt: any;
}

const AdminDashboard: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/admin/login');
      }
    });

    const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
    const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
      const enquiriesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Enquiry[];
      setEnquiries(enquiriesData);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot();
    };
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard - Enquiries</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Message</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    {enquiry.createdAt?.toDate().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">{enquiry.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">{enquiry.email}</div>
                    <div className="text-sm text-slate-500">{enquiry.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {enquiry.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-500 max-w-xs truncate">{enquiry.message}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {enquiries.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No enquiries found yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
