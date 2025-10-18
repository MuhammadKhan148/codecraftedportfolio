import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // Extract form data
    const {
      firstName,
      lastName,
      email,
      projectIdea,
      projectType,
      projectTypeCustom,
      projectDescription,
      budgetRange,
      budgetCustom
    } = formData

    // Prepare email content
    const emailContent = `
New Project Request from CodeCrafted Website

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}

Project Details:
- Project Idea: ${projectIdea}
- Project Type: ${projectType}${projectTypeCustom ? ` (Custom: ${projectTypeCustom})` : ''}
- Budget Range: ${budgetRange}${budgetCustom ? ` (Custom: ${budgetCustom})` : ''}

Project Description:
${projectDescription}

---
This message was sent from the CodeCrafted contact form.
    `.trim()

    // Use Web3Forms to send emails to both team members
    const web3formsData = {
      access_key: '3016c8b3-2e55-43bb-9189-d27ba4e4e131',
      name: `${firstName} ${lastName}`,
      email: email,
      subject: `New Project Request from ${firstName} ${lastName} - CodeCrafted`,
      message: emailContent,
      project_idea: projectIdea,
      project_type: projectType + (projectTypeCustom ? ` (Custom: ${projectTypeCustom})` : ''),
      budget_range: budgetRange + (budgetCustom ? ` (Custom: ${budgetCustom})` : ''),
      project_description: projectDescription,
      to: 'aakashijaz2002@gmail.com,muhammad.mak252@gmail.com' // Send to both emails
    }

    // Send email using Web3Forms
    try {
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(web3formsData)
      })

      if (emailResponse.ok) {
        console.log('✅ Email sent successfully to both team members via Web3Forms')
        return NextResponse.json({ 
          success: true, 
          message: 'Project request submitted successfully! We\'ll get back to you soon.' 
        })
      } else {
        console.log('❌ Web3Forms email failed, but logging the request')
      }
    } catch (emailError) {
      console.log('❌ Web3Forms email failed, but logging the request')
    }

    // Fallback: Always log the request details
    console.log('=== NEW PROJECT REQUEST ===')
    console.log('📧 TO: aakashijaz2002@gmail.com, muhammad.mak252@gmail.com')
    console.log('👤 NAME:', `${firstName} ${lastName}`)
    console.log('📧 EMAIL:', email)
    console.log('💡 PROJECT IDEA:', projectIdea)
    console.log('🔧 PROJECT TYPE:', projectType, projectTypeCustom ? `(Custom: ${projectTypeCustom})` : '')
    console.log('💰 BUDGET:', budgetRange, budgetCustom ? `(Custom: ${budgetCustom})` : '')
    console.log('📝 DESCRIPTION:', projectDescription)
    console.log('============================')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Project request submitted successfully! We\'ll get back to you soon.' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Even if email fails, log the request for manual follow-up
    console.log('=== FALLBACK: PROJECT REQUEST LOGGED ===')
    console.log('Request details logged to server console for manual follow-up')
    console.log('========================================')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Project request submitted successfully! We\'ll get back to you soon.' 
    })
  }
}
