start-infra:
	docker start nsvrdb nsvrmq nsv-pg-auth nsv-pg-user

stop-infra:
	docker stop nsvrdb nsvrmq nsv-pg-auth nsv-pg-user

exec-%:
	docker exec -it $* bash

migrate-%:
	bun --cwd apps/$* prisma migrate dev