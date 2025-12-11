# Contact Form Setup

## Setup Instructions (5 minutes)

Your contact form is configured to use **Formspree** - a free service that sends form submissions directly to your email.

### Steps to activate:

1. **Go to Formspree**: Visit https://formspree.io/
2. **Sign up** with your email (aryan.mcharan@gmail.com)
3. **Create a new form**:
   - Click "New Form"
   - Name it "Portfolio Contact"
   - Add your email: aryan.mcharan@gmail.com
4. **Get your Form ID**: Copy the form endpoint (looks like `https://formspree.io/f/xyzabc123`)
5. **Update your portfolio**:
   - Open `/Users/Ary/Downloads/aryan-portfolio/index.html`
   - Find line with `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID (e.g., `xyzabc123`)

### Example:
```html
<!-- Before -->
<form class="contact-form glass-card" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- After (with your ID) -->
<form class="contact-form glass-card" id="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
```

### How it works:
1. User fills out the form on your website
2. Clicks "Send Message"
3. Form submits to Formspree
4. You receive an email at aryan.mcharan@gmail.com with:
   - Sender's name
   - Sender's email
   - Their message
5. You can reply directly from your email

### Benefits:
✅ No backend code needed
✅ Spam protection included
✅ Email notifications
✅ Free tier: 50 submissions/month
✅ Mobile-friendly
✅ Works with Vercel deployment

### Alternative Option:
If you prefer the current **mailto** method (opens user's email client):
- No setup needed
- Already works
- Just less professional UX

Keep the Formspree integration - it's much better!
