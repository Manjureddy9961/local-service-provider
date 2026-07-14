export const categories = [
  { id: 1, name: 'Plumbing' },
  { id: 2, name: 'Electrical' },
  { id: 3, name: 'Cleaning' },
  { id: 4, name: 'Tutoring' },
  { id: 5, name: 'Carpentry' },
  { id: 6, name: 'Painting' },
  { id: 7, name: 'Computer Repair' },
]

export const providers = [
  { id: 1, name: 'Ravi Kumar', category: 'Plumbing', city: 'Hyderabad', experience: 7, price: 350, rating: 4.8, reviews: 62, bio: 'Licensed plumber handling leak repairs, pipe fitting, and bathroom installs across Hyderabad.' },
  { id: 2, name: 'Sunitha Rao', category: 'Electrical', city: 'Bangalore', experience: 5, price: 400, rating: 4.6, reviews: 41, bio: 'Residential and commercial wiring, fault diagnosis, and smart-home fittings.' },
  { id: 3, name: 'Manoj Verma', category: 'Cleaning', city: 'Hyderabad', experience: 3, price: 250, rating: 4.4, reviews: 28, bio: 'Deep home cleaning, move-in/move-out service, sofa and carpet shampoo.' },
  { id: 4, name: 'Priya Sharma', category: 'Tutoring', city: 'Bangalore', experience: 6, price: 500, rating: 4.9, reviews: 77, bio: 'Maths and Physics tutor for grades 8-12, exam-focused sessions.' },
  { id: 5, name: 'Suresh Naidu', category: 'Carpentry', city: 'Hyderabad', experience: 10, price: 450, rating: 4.7, reviews: 53, bio: 'Custom furniture, modular wardrobes, and repair work.' },
  { id: 6, name: 'Kavitha Reddy', category: 'Painting', city: 'Bangalore', experience: 4, price: 300, rating: 4.3, reviews: 19, bio: 'Interior and exterior painting with texture and waterproofing options.' },
  { id: 7, name: 'Arjun Das', category: 'Computer Repair', city: 'Hyderabad', experience: 5, price: 380, rating: 4.5, reviews: 34, bio: 'Laptop/desktop repair, virus removal, data recovery, hardware upgrades.' },
  { id: 8, name: 'Lakshmi Iyer', category: 'Cleaning', city: 'Bangalore', experience: 2, price: 220, rating: 4.1, reviews: 12, bio: 'Regular home and office cleaning with eco-friendly products.' },
]

export const bookings = [
  { id: 'TCK-1042', provider: 'Ravi Kumar', category: 'Plumbing', date: '2026-07-18', time: '10:00 AM', status: 'pending' },
  { id: 'TCK-1039', provider: 'Priya Sharma', category: 'Tutoring', date: '2026-07-16', time: '5:00 PM', status: 'accepted' },
  { id: 'TCK-1021', provider: 'Suresh Naidu', category: 'Carpentry', date: '2026-07-10', time: '11:00 AM', status: 'in_progress' },
  { id: 'TCK-0988', provider: 'Kavitha Reddy', category: 'Painting', date: '2026-06-29', time: '9:00 AM', status: 'completed' },
  { id: 'TCK-0954', provider: 'Manoj Verma', category: 'Cleaning', date: '2026-06-20', time: '2:00 PM', status: 'cancelled' },
]

export const providerRequests = [
  { id: 'TCK-1045', customer: 'Deepak N.', date: '2026-07-19', time: '3:00 PM', address: 'Kondapur, Hyderabad', status: 'pending' },
  { id: 'TCK-1040', customer: 'Anjali M.', date: '2026-07-17', time: '10:00 AM', address: 'Gachibowli, Hyderabad', status: 'accepted' },
  { id: 'TCK-1018', customer: 'Ramesh T.', date: '2026-07-09', time: '1:00 PM', address: 'Madhapur, Hyderabad', status: 'in_progress' },
  { id: 'TCK-0975', customer: 'Fatima S.', date: '2026-06-25', time: '4:00 PM', address: 'Miyapur, Hyderabad', status: 'completed' },
]

export const reviews = [
  { id: 1, provider: 'Ravi Kumar', customer: 'Anjali M.', rating: 5, comment: 'Fixed the leak in 20 minutes, very professional.' },
  { id: 2, provider: 'Ravi Kumar', customer: 'Deepak N.', rating: 4, comment: 'Good work, arrived a bit late.' },
  { id: 3, provider: 'Priya Sharma', customer: 'Ramesh T.', rating: 5, comment: 'My daughter\'s grades improved within a month.' },
]

export const statusLabel = {
  pending: 'Pending',
  accepted: 'Accepted',
  in_progress: 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
  rejected: 'Rejected',
}
