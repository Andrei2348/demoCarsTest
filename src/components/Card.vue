<template>
	<div class="card__wrapper">
		<div class="card__menu">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
					stroke="#293148"
					stroke-opacity="0.6"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
					stroke="#293148"
					stroke-opacity="0.6"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
					stroke="#293148"
					stroke-opacity="0.6"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<img
			:src="photo"
			alt=""
			class="card__photo"
		/>
		<div class="card__content">
			<h2 class="card__title">{{ vehicle_name }}</h2>
			<p class="card__win">WDB {{ vin }}</p>
		</div>
		<div class="card__footer">
			<span class="card__rating"
				><svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.3333 4L5.99999 11.3333L2.66666 8"
						stroke="#7FC75E"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				30/30</span
			>
			<p class="card__date">{{ shortDate }}</p>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		id: Number,
		vehicle_name: String,
		vin: String,
		photo: String,
		created_at: Number,
	});
	const prefix = ["ru-RU", "en-EN"];
	let date = new Date(props.created_at * 1000);
	let options = { year: "numeric", month: "short", day: "numeric" };
	let shortDate = date.toLocaleDateString(prefix[0], options);
</script>
<style scoped>
	.card__wrapper {
		width: 354px;
		min-height: 335px;
		background-color: #f3f6f8;
		border-radius: 10px;
		position: relative;
	}
	.card__menu {
		position: absolute;
		top: 16px;
		right: 20px;
		cursor: pointer;
	}
	.card__photo {
		width: 260px;
		height: 135px;
		margin-top: 40px;
		margin-left: 47px;
		margin-right: 47px;
		margin-bottom: 24px;
	}
	.card__content {
		margin-left: 24px;
		margin-right: 24px;
		border-bottom: 1px solid #e4e4e4;
	}
	.card__title {
		font-size: 20px;
		font-weight: 700;
		line-height: 22px;
    height: 22px;
		color: #293148;
		margin-bottom: 12px;
		padding-right: 10px;
	}
	.card__win {
		font-size: 15px;
		font-weight: 500;
		line-height: 20px;
		color: #29314899;
		margin-bottom: 18px;
	}
	.card__rating {
		background-color: #e4f5dd;
		color: #7fc75e;
		font-size: 15px;
		font-weight: 700;
		line-height: 22px;
		padding: 4px 12px;
		border-radius: 6px;
	}
	.card__footer {
		display: flex;
		justify-content: space-between;
		padding: 18px 24px 16px;
		font-size: 15px;
		font-weight: 500;
		line-height: 16px;
	}
</style>
