import { getUserSession } from '@/lib/get-user-session'

import { redirect } from 'next/navigation'
import React from 'react'
import { prisma } from '../../../../prisma/prisma-client'
import ProfileForm from '@/components/shared/ui/profile-form'

async function ProfilePage() {
	const session = await getUserSession()

	if (!session) {
		return redirect('/non-auth')
	}
	const user = await prisma.user.findFirst({
		where: {
			id: Number(session.id),
		},
	})

	return <ProfileForm data={user} />
}

export default ProfilePage
